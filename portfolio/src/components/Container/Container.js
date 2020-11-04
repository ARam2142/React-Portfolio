import React from "react";
import portfoliopic from "./portfoliopic.jpeg";

function Container() {
    return (
        <div class="container-lg">
            <div class="row">
                <div class="col-sm-7">
                    <img src={portfoliopic} class="rounded mx-auto d-block" width="300" height="320" alt="img-thumbnail" />
                </div>

                <div class="col-sm-5">
                    <div class="card w-80 mx-auto">
                        <div class="card-body">
                            <h5 class="card-title text-center">Web Developer</h5>
                            <p class="card-text">Hola, My name is Andrés, I am a full stack web development student at the University of New Hampshire.
                            Since my early days at college, I have always had a high interest in tech or anything related to computers.
                            Aside from work and school, I love traveling, swimming, video games, baseball, and movies.
                            While you are on this page feel free to take a look at my projects that I have designed, they are awesome!
                            My projects have been designed with HTML, CSS, Bootstrap, Javascript, and JQuery.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center icons">
                <div class="col-sm-1">
                    <a href="https://github.com/ARam2142"><i target="_blank" class="fab fa-github-square" style={{"font-size": "60px"}}></i></a>
                </div>
                <div class="col-sm-1">
                    <a href="https://www.linkedin.com/in/andres-ramirez-8b07487b/"><i target="_blank" class="fab fa-linkedin" style={{"font-size":"60px"}}></i></a>
                </div>
                <div class="col-sm-1">
                    <a href="https://www.instagram.com/aramirez2142/"><i target="_blank" class="fab fa-instagram-square" style={{"font-size": "60px"}}></i></a>
                </div>
            </div>
        </div>

    )

}

export default Container;