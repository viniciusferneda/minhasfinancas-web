import React from 'react'

import { withRouter } from 'react-router-dom'
import Card from '../components/card'
import FormGroup from '../components/form-group'

class CadastroUsuario extends React.Component{

    state = {
        nome: '',
        email: '',
        senha: '',
        senhaRepeticao: ''
    }

    cadastrar = () => {
        console.log(this.state)
    }

    cancelar = () => {
        this.props.history.push('/login')
    }

    render(){
        return(
            <Card title="Cadastro de Usuário">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <FormGroup label="Nome: *" htmlFor="inputNome">
                                <input type="text" 
                                        className="form-control" 
                                        id="inputNome" 
                                        name="nome"
                                        aria-describedby="nomeHelp" 
                                        placeholder="Digite o Nome"
                                        onChange={e => this.setState({nome: e.target.value})}/>
                            </FormGroup>
                            <FormGroup label="E-mail: *" htmlFor="inputEmail">
                                <input type="email" 
                                    className="form-control" 
                                    id="inputEmail" 
                                    name="email"
                                    aria-describedby="emailHelp" 
                                    placeholder="Digite o Email"
                                    onChange={e => this.setState({email: e.target.value})}/>
                            </FormGroup>
                            <FormGroup label="Senha: *" htmlFor="inputSenha">
                                <input type="password" 
                                    className="form-control" 
                                    id="inputSenha" 
                                    name="senha"
                                    placeholder="Password"
                                    onChange={e => this.setState({senha: e.target.value})}/>
                            </FormGroup>
                            <FormGroup label="Repita a Senha: *" htmlFor="inputRepitaSenha">
                                <input type="password" 
                                    className="form-control" 
                                    id="inputRepitaSenha" 
                                    name="repitaSenha"
                                    placeholder="Password"
                                    onChange={e => this.setState({senhaRepeticao: e.target.value})}/>
                            </FormGroup>
                            <button type="button" className="btn btn-success" onClick={this.cadastrar}>Salvar</button>
                            <button type="button" className="btn btn-danger" onClick={this.cancelar}>Cancelar</button>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter(CadastroUsuario)