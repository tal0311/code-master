

function AppLoader({display=''}) {
    return (

        <div className={`lds-ring ${display}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

    )
}

export default AppLoader;