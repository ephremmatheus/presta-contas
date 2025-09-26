//pedidos tem tempo para expirar
require('dotenv').config();
const connection = process.env.CONNECTION_STRING; 

const mysql = require('mysql2/promise');
const client = mysql.createPool(connection);

async function getUser(email){
    const [ rows ] = await client.query('SELECT * FROM usuarios WHERE email = ?', [email])
    return rows[0];
}

async function getUserStatus(email){    
    const user = await getUserByEmail(email)
    return user.status;
}

async function getUserByEmail(email){
    const [ rows ] = await client.query('SELECT * FROM usuarios WHERE email = ?', [email]);
    return rows[0];
}

/* FUNÇÕES DE CADASTRO DE USUARIOS */
function gerarCodigo(tamanho = 6) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let codigo = '';
    for (let i = 0; i < tamanho; i++) {
        codigo += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return codigo;
}

async function criarPedidosAcesso(userId, codigoAcesso){
    try{
        //pega o codigo de acesso e busca no banco para pegar o id
        const [rows] = await client.query('SELECT id FROM condominios WHERE codigo_acesso = ?', [codigoAcesso]);
        
        if (rows.length === 0) { //se nao existir o codigo
            throw new Error('Código de condomínio inválido');
        }

        const condominioId = rows[0].id;

        const [result] = await client.query('INSERT INTO pedidos_acesso(usuario_id, condominio_id) VALUES (?, ?)', [userId, condominioId]);

        return { message: "o pedido de entrada foi solicitado ao síndico! aguarde.", type: 'success'};
    } catch(err){
        return{ message: `${err}`, type: 'error' };   
    }
}

async function cadastrarCondominio(nome, endereco, codigo){
    try {
        const [result] = await client.query(`INSERT INTO condominios(nome, endereco, codigo_acesso) VALUES (?, ?, ?)`, [nome, endereco, codigo])

        if (result && result.insertId) {
            return { id: result.insertId };
        } else {
            return null;
        }

    } catch(err) {
        console.error('erro ao cadastrar condominio:', err)
        throw err;
    }
}

async function cadastrarUsuario(user){
    let codigoAcesso = null;
    let cadastroCond = null;

    try {
        if(user.tipo === 'sindico'){
            codigoAcesso = gerarCodigo(6);
            cadastroCond = await cadastrarCondominio(user.nomeCondominio, user.enderecoCondominio, codigoAcesso);
            user.status = cadastroCond ? 'ativo' : 'pendente';
        } else{
            user.status = 'pendente';
        }
        
            const [ result ] = await client.query(`INSERT INTO usuarios(nome, email, senha, tipo, condominio_id, status) VALUES (?, ?, ? ,?, ?, ?)`, [user.nome, user.email, user.senha, user.tipo, cadastroCond ? cadastroCond.id : null, user.status]);
            const userId = result.insertId;

            if(user.tipo !== 'sindico'){
                const criarPedido = await criarPedidosAcesso(userId, user.codigo);
                return criarPedido;
            }

        return { message: "Condomínio criado com sucesso!", type: 'success', codigoAcesso: codigoAcesso };
    } catch(err) {
        return {message: err, type: 'error'};
    }
}

module.exports = {cadastrarUsuario, getUserByEmail, getUserStatus, getUser};