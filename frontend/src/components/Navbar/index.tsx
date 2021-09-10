import "./styles.css";
import {NavLink, useHistory} from "react-router-dom";
import {isAuthenticated, obtemDadosToken, removeDataAutenticate} from "util/requests";
import {useForm} from "react-hook-form";
import {useContext, useEffect} from "react";
import {ContAuthenticate} from "../../ContAuthenticate";

const Navbar = () => {

    const {dadosAutContexto, setDadosAutContexto} = useContext(ContAuthenticate);

    useEffect(() => {
        if (isAuthenticated()) {
            setDadosAutContexto({
                authenticated: true,
                dataToken: obtemDadosToken(),
            });
        } else {
            setDadosAutContexto({
                authenticated: false,
            });
        }
    }, [setDadosAutContexto]);

    const {handleSubmit} = useForm();
    const history = useHistory();

    const onSubmit = () => {
        removeDataAutenticate();
        setDadosAutContexto({
            authenticated: false,
        });
        history.replace("/");
    };
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-expand-lg navbar-light">
                <div
                    className="custom-navbar" id="navbarSupportedContent">
                    <NavLink to="/" className="navbar-brand">
                        MovieFlix - BDS 3.0 - by Wagner Pires
                    </NavLink>
                    {dadosAutContexto.authenticated && (
                        <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit(onSubmit)}>
                            <button
                                className="btn btn-outline-dark btn-sm my-2 my-sm-0">
                                SAIR
                            </button>
                        </form>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;