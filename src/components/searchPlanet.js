import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from './searchBox';
import Utils from '../utils';
import { getPlanets } from '../actions/planetsActions';

const { userProfile, getRandomColor } = new Utils();

class SearchPlanet extends Component {
    state = {
        planets: [],
        maxPopulation: 0,
        searchKeyword: '',
        userName : ''
      }

    search = (searchTerm) => {
      this.setState({ searchKeyword: searchTerm });
    }

    componentDidMount() {
      this.props.getPlanets();

      const { name } = userProfile();

      this.setState({ userName: name });
    }

    componentDidUpdate(prevProps) {
         const { plantesList } = prevProps;
         let max = 0;
         
         if(this.props.plantesList && this.props.plantesList.length !== plantesList.length) {
          this.props.plantesList.forEach(function (planet) {
            if (planet.population != "unknown") {
              if (parseInt(planet.population, 10) > max) {
                max = parseInt(planet.population, 10);
              }
            }
          });
          this.setState({ maxPopulation: max });
         }
    }

    handleLogout = () => {
           localStorage.removeItem('user');
           this.props.history.push('/');
    } 

    render() {
        const { maxPopulation, searchKeyword, userName } = this.state;
    
        const { isLoading } = this.props;

        if(isLoading) {
          return (
            <div>
             Loading ...
            </div>
          )
        }

      return (
        <div class="col-md-12 col-sm-12 no-padding planets-component">
          <div class="loggedin-user">
            Logged In User - { userName }
            <button className={'btn btn-primary'} onClick={this.handleLogout}> Logout</button>
          </div>
          <SearchBox search={this.search}  userName={userName}/>
          <div class="col-md-12 col-sm-12 planets-container">
          {
              !!this.props.planetsList && this.props.planetsList.map(function (planet, index) {                      
                if (planet.name.toLowerCase().indexOf(searchKeyword.toLowerCase()) != -1) {
                  return (
                    <div
                      style={{
                        width: planet.population === 'unknown' ? 100 : 100 + ( 350 * ( parseInt(planet.population, 10)  / maxPopulation ) ) + 'px',
                        background: getRandomColor(),
                      }}
                      class="planets"
                      title={ 'Planet Name: ' + planet.name + '; Planet Population: ' + planet.population }
                      key={index}
                    >
                      <span class="planet-name">
                        { planet.name }
                      </span>
                      <span class="planet-population">
                        { planet.population === 'unknown' ? 'Not defined' : planet.population }
                      </span>
                    </div>
                  );
                } else {
                  return null;
                }
              })
            }
          </div>
        </div>
      )
    }
};

const mapStateToProps = ({ planets:  { isLoading, planetsList } }) => ({ isLoading, planetsList });

export default connect(mapStateToProps, { getPlanets })(SearchPlanet);
