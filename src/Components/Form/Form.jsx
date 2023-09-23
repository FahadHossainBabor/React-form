
const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log("Hello world!");
    }
    return (
        <div className="border-2 mt-10 w-96 mx-auto">

            <form onSubmit={handleSubmit}>

                <input type="text" name="name" className="border-2" 
                placeholder="Name"/>
                <br />
                <br />
                <input type="email" name="email" className="border-2" placeholder="Email" />
                <br />
                <br />
                <div className="flex justify-center">
                <input type="submit" value="Submit"  className="bg-red-500 text-center py-3 px-5 text-white"/>
                </div>

            </form>
            
        </div>
    );
};

export default Form;