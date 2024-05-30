import './style.css'

export const City = ({name, population, area, district, photo}) => (
    <div className='city'>
        <h2 className='city__name'>{name}</h2>
        <p className='city__district'>({district})</p>
        <img className='city__photo' src={photo}></img>
        <p className='city__population'>populace: {population}</p>
        <p className='city__area'>rozloha: {area} km2</p>
    </div>
)