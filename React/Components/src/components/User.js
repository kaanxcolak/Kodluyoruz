import PropTypes from "prop-types";
function User({name,surname,age,isLoggedIn,friends,adress}){

    if(!isLoggedIn){
        return <div>Giriş yapmadınız.</div>
    }
    return (
        <>
        <h1>{`${name} ${surname } (${age})`}</h1>
        {adress.title} {adress.zip}
        <br />
        <br />
        {
            friends &&    // yanlış veri tipinde hatayı düzeltir
            friends.map((friend,index) => (
                <div key={friend.id}>{friend.name}</div>
            ))}
        </>
    );
}
User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    friends: PropTypes.array.isRequired,
    adress: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number,
    }),
  };
  User.defaultProps = {
        name: "isimsiz",
        isLoggedIn: false,
  }


export default User;
