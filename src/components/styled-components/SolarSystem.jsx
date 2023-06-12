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
    z-index: -2;
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
`

const SolarSystem = () => {

  const planets = [
    {name: 'sun',
    radius: 10,
    orbit: 0,
    colorone: 'rgba(255, 200, 100, 1)',
    colortwo: 'rgba(255, 220, 120, 1)'
    },
    {name: 'earth',
    radius: 2,
    orbit: 15,
    colorone: 'rgba(0, 112, 187, 1)',
    colortwo: '#59bccb'
    },
    {name: 'jupiter',
    radius: 6,
    orbit: 30,
    colorone: 'rgba(193, 154, 107, 1)',
    colortwo: '#d34f1a'
    },


  ]

  return (
    <>
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
    </>
  )
}

export default SolarSystem;
