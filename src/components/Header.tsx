const Header = ({
    title
}:any) => {
    return (  
        <div className="mb-6">
            <h1 className="mt-6 text-center text-3xl font-bold text-gray-900">
                {title}
            </h1>
        </div>  
    );
}
 
export default Header;