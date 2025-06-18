import './account.css'

const Account = () => {
  return (
    <div className="account section">
      <div className="accountContent">
        <div className="topBar">
          <div className="left">
            <span>Home /</span> <span>My Account</span>
          </div>
          <div className="right">
            welcome! <span>Md Rimel</span>
          </div>
        </div>

        <div className="accountBody">
          <div className="accountMenu">
            <div className="accountMenuItem">
              <h3>Manage My Account</h3>
              <div className="accountMenuItemOptions">
                <span className='active'>My Profile</span>
                <span>Address Book</span>
                <span>My Payment Options</span>
              </div>
            </div>
            <div className="accountMenuItem">
              <h3>My Orders</h3>
              <div className="accountMenuItemOptions">
                <span>My Returns</span>
                <span>My Cancellations</span>
              </div>
            </div>
            <div className="accountMenuItem">
              <h3>My WishList</h3>
            </div>
          </div>
          
          <div className="accountProfile">
            <h2>Edit Your Profile</h2>
            <div className="profile">
              <div className="profileInputs">
                <div className="profileInput">
                  <label htmlFor="">First Name</label>
                  <input type="text" placeholder='Md' />
                </div>
                <div className="profileInput">
                  <label htmlFor="">Last Name</label>
                  <input type="text" placeholder='Rimel' />
                </div>
              </div>
              <div className="profileInputs">
                <div className="profileInput">
                  <label htmlFor="">Email</label>
                  <input type="email" placeholder='rimel1111@gmail.com' />
                </div>
                <div className="profileInput">
                  <label htmlFor="">Address</label>
                  <input type="text" placeholder='Kingston, 5236, United States' />
                </div>
              </div>
            </div>
            <div className="profilePasswordField">
              <label>Password Changes</label>
              <input type="password" placeholder='Current Password' />
              <input type="password" placeholder='New Password' />
              <input type="password" placeholder='Confirm New Password' />
            </div>
            <div className="buttons">
              <button>Cancel</button>
              <button>Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account