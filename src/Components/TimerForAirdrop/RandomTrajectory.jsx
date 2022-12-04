import React from 'react';

const RandomTrajectory = (props) => {
    let max
    if (document.querySelector('.section-map__map')) max = document.querySelector('.section-map__map').clientHeight - 100
    let rand = Math.ceil(Math.random() * (max - 100) + 100)
    if (props.states.setTrajectoryPlane && rand > 0) props.states.setTrajectoryPlane(rand);
}

export default RandomTrajectory;