
export default function User({user}) {
    console.log(user)
    const{name, email, phone}=user
  return (
    <div className="user-class">
<h1>User:{name}</h1>
<h3>User Email:{email}</h3>
<h5>User Phone:{phone}</h5>


    </div>
  )
}
