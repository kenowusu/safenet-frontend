


//=====================styled jsx===============//
import body from '../../styles/components/home/body';

const Layout = (props) => {
    return ( 
        <>
        <style jsx global>{body}</style>
         {props.children}
        </>
     );
}
 
export default Layout;