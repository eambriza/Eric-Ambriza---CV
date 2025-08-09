import React, { Component } from "react";
import ParticlesBg from "particles-bg";

class Header extends Component {
  constructor(props) {
    super(props);
    this.particleTypes = [
      "lines",
      "circle",
      "cobweb",
      "polygon",
      "square",
      "tadpole",
      "fountain",
      "random"
    ];
    this.state = { particleIndex: 0, theme: 'dark' };
  }

  componentDidMount() {
    const savedTheme = localStorage.getItem('theme');
    const theme = savedTheme || 'dark';
    this.applyTheme(theme);
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.setState({ theme });
  }

  toggleTheme = () => {
    const next = this.state.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme(next);
  }

  cycleParticles = () => {
    this.setState(({ particleIndex }) => ({
      particleIndex: (particleIndex + 1) % this.particleTypes.length,
    }));
  };

  render() {
    if (this.props.data) {
      var project = this.props.data.project;
      var github = this.props.data.github;
      var name = this.props.data.name;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    const particleType = this.particleTypes[this.state.particleIndex];

    return (
      <header id="home">
        <ParticlesBg type={particleType} bg={true} />
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}</h3>
            <hr />
            <ul className="social">
              <a href={project} className="button btn project-btn">
                <i className="fa fa-book"></i>Project
              </a>
              <a href={github} className="button btn github-btn">
                <i className="fa fa-github"></i>Github
              </a>
              <button className="button btn" onClick={this.cycleParticles}>
                Change Background
              </button>
              <button className="button btn" onClick={this.toggleTheme}>
                Toggle {this.state.theme === 'dark' ? 'Light' : 'Dark'} Mode
              </button>
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
