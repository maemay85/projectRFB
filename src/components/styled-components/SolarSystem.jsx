import { keyframes, styled } from "styled-components";



const PlanetImage = styled.div`
  position: absolute;
  top: 50%;
  margin: ${(props) => `-${props.radius/2}rem 0 0 -${props.radius/2}rem`};
  height: ${(props) => `${props.radius}rem`};
  width: ${(props) => `${props.radius}rem`};
  border-radius: 50%;
  background: radial-gradient(
    circle at -100%,
    ${(props) => `${props.colorone}`},
    ${(props) => `${props.colortwo}`}
  );
  background-size: cover;
  box-shadow: ${(props) => `
    inset
      ${props.radius / 20}rem
      ${props.radius / 10}rem
      ${props.radius  / 6}rem
      ${props.radius  / 25}rem
      rgba(0, 0, 0, .75),
      0
      0
      ${props.radius  / 10}rem
      ${props.radius  / 20}rem
      rgba(255, 255, 255, .25)`};
    color: #ccc;
    z-index: 0;
`
const rotateAnimation = keyframes`
  100% {
   transform: rotate(360deg);
  }
 `

const PlanetOrbit = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: ${(props) => `-${props.orbit/2}rem 0 0 -${props.orbit/2}rem`};
  border-radius: 50%;
  width: ${(props) => `${props.orbit}rem`};
  height: ${(props) => `${props.orbit}rem`};
  animation: ${rotateAnimation} linear infinite;
  animation-duration: ${(props)=> `${props.orbit}s`};
  z-index: 0;
`

const SolarSystem = () => {

  const planets = [
    {name: 'sun',
    radius: 3,
    orbit: 0,
    colorone: 'rgba(255, 200, 100, 1)',
    colortwo: 'rgba(255, 220, 120, 1)'
    },
    {name: 'mercury',
    radius: .33,
    orbit: 4.0012,
    colorone: '#d90808',
    colortwo: '#ef844e'
    },
    {name: 'earth',
    radius: .66,
    orbit: 15.075,
    colorone: 'rgba(0, 112, 187, 1)',
    colortwo: '#59bccb'
    },
    {name: 'venus',
    radius: .66,
    orbit: 10.3567,
    colorone: '#f9c006',
    colortwo: '#ce6005'
    },
    {name: 'mars',
    radius: .55,
    orbit: 20.257,
    colorone: '#f01313',
    colortwo: '#ce6005'
    },
    {name: 'jupiter',
    radius: 1.5,
    orbit: 30.11,
    colorone: 'rgba(193, 154, 107, 1)',
    colortwo: '#d34f1a'
    },
    {name: 'saturn',
    radius: 1,
    orbit: 35.87,
    colorone: '#443ce0',
    colortwo: '#8480f3'
    },
    {name: 'neptune',
    radius: 1,
    orbit: 40.838,
    colorone: '#3ce083',
    colortwo: '#80f3cb'
    },
    {name: 'uranus',
    radius: 1,
    orbit: 45.38,
    colorone: '#3c73e0',
    colortwo: '#80bdf3'
    },
    {name: 'pluto',
    radius: .25,
    orbit: 60.3,
    colorone: '#807ea7',
    colortwo: '#8480f3'
    },


  ]

  return (
    <div id='solar-system'>
    {planets.map((planet)=> {
      return ( <div key={planet.name}>
        <PlanetOrbit orbit={planet.orbit} >
        <PlanetImage

          radius={planet.radius}
          colorone={planet.colorone}
          colortwo={planet.colortwo}

        />
        </PlanetOrbit> </div>
      )
    }

    )}
    </div>
  )
}

export default SolarSystem;
