const Footer = () => {
    const today = new Date();
    return (
        <footer className='Footer'>
            <p>Copyright &copy; {today.getFullYear()} Vikrant Kumar</p>
        </footer>
    )
}

export default Footer
