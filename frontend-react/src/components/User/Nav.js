import { HiSearchCircle } from 'react-icons/hi';
import { TbWorld } from 'react-icons/tb';
import { MdOutlineStorage } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
function Nav() {
  return (
    <div className="navv">
       <div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png
      " width="120px" height="35px" className='logo' />
      </div>
<div className='mid'>
    <div className="navMiddle">
        <p className='anywhere'>Anywhere</p>
        <p className='anyweek'>Any week</p>
        <p>Add guests</p>
<sub className='searchIcon'><HiSearchCircle/></sub>
        
</div>
    </div>
    <div>
    <div className="navLast">
        
        <p className='host'>Become a Host</p>
       <sub className='world'> <p><TbWorld/></p></sub>
       

        <div className='profileIcons'>
      <sub> <p><MdOutlineStorage/></p></sub> 
       <sub><p><CgProfile/></p></sub> 
        </div>
        </div>

    </div>




    </div>
  );
}
export default Nav;
