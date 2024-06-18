const Personalcard = ({ name, age, picture, bio }) => {

    return (
        <>
            <div className="alldata">
                <div className='all'>
                    <div className='personal'>
                        <div className='pic'>
                            <img src={picture} alt="" width={40} />
                        </div>
                        <div className='details'>
                            <p>{name}</p>
                            <p>{age}</p>
                            <p>{bio}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Personalcard