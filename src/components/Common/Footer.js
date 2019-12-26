import React, {Component} from "react";



class Footer extends Component{
    render(){
        return(
            <footer class="footer">
                <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-4">
                    <span class="copyright">Copyright &copy; Your Website 2019</span>
                    </div>
                    <div class="col-md-4">
                    <ul class="list-inline social-buttons">
                        <li class="list-inline-item">
                        <a to="#">
                            <i class="fab fa-twitter"></i>
                        </a>
                        </li>
                        <li class="list-inline-item">
                        <a to="#">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        </li>
                        <li class="list-inline-item">
                        <a to="#">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div class="col-md-4">
                    <ul class="list-inline quicklinks">
                        <li class="list-inline-item">
                        <a to="#">Privacy Policy</a>
                        </li>
                        <li class="list-inline-item">
                        <a to="#">Terms of Use</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </footer>
        )
    }
}
export default Footer