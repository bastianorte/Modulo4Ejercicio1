export default function Header() {
    const appName = 'My Todo App';
    const headerStyle = {
    textAlign: 'center',
    color: 'blue',
    };
    return (
    <header style={headerStyle}>
    <h1>{appName}</h1>
    </header>
    );
    }