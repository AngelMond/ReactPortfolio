import React, { Component } from 'react';

class AboutMe extends Component {
    render() {
        return (
            <section className='container '>
                <article  className='section-border mt-5 p-4 shadow'>
                    <h3 className='paragraph text-center section-headings'>Full Stack Web Developer</h3>
                    <div id="aboutMe-text-container" className='p-2'>
                        <p className='paragraph fs-4 px-3 mb-4 text-sm-center text-md-start'>
                            I'm from Mexico City and i'm currently enrolled in a bootcamp provided by Tec
                            de Monterrey and Trilogy Education Services where I have had the opportunity to gain experience by
                            developing projects on my own and also projects with different work teams.
                        </p>

                        <p className='paragraph fs-4 px-3 mb-4'>
                            I have always had a passion for technology and I had the opportunity to change my career and I do not regret it,
                            it is something incredible because I can sit for hours and hours learning and programming and I have never felt so much
                            passion for something in my life and I am happy to have discovered my passion. It's true when they say:  <cite>"Choose a job
                            you're passionate about and you won't have to work a day in your life".</cite>
                        </p>

                        <p className='fs-4 px-3 mb-4'>
                            I consider myself a disciplined person, and that helps me a lot to learn the necessary knowledge to work as a web developer. 
                            I really like learning about data structures and algorithms, I think that's a fundamental part of being a good software developer.
                        </p>

                        <p className='paragraph fs-4 px-3 mb-4'>
                            My resume is provided, please feel free to download it, if interested look forward to hearing from you!
                        </p>
                        <p>
                            Wisdom comes from experience and experience is often the result of a lack of
                            wisdom.
                            <figcaption>
                                -<cite id="sourceCite" title="Source">Terry Pratchett</cite>
                            </figcaption>
                        </p>
                    </div>
                </article>
            </section>
        )
    }
}
export default AboutMe;