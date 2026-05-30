function Menu() {
    return (
        <div className="bg-neutral-950 font-mono w-fit">
            <img src=".\src\assets\luisLogo.png" className="object-none p-40"></img>
            <br/>
           <div className="p-10 text-gray-700">
                <div>
                    <button className="text-green-400 text-left">about</button><p className="float-right">About Me</p>
                </div>
                <div>
                    <button className="text-green-400">projects</button><p className="float-right">Check out! <span>projects</span></p>
                </div>
                <div>
                    <button className="text-green-400">contact</button><p className="float-right">Email me!</p>
                </div>
                </div>
            </div>
    )
}

export default Menu