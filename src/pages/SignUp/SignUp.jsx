import React, { useState } from "react";
import axios from "axios";
import "./SignUp.scss";
import { useSelector } from "react-redux";

const SignUp = () => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [role, setRole] = useState("User");
  const [fullname, setFullname] = useState("");
  const [err, setErr] = useState("");
  const [office, setOffice] = useState("Греческая");
  const [image, setImage] = useState("");
  const authInfo = useSelector((state) => state.auth.authInfo);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    data.username = formData.get("login");
    data.password = formData.get("password");
    data.fullname = formData.get("fullname");
    data.role = formData.get("role");
    data.office = formData.get("office");
    const image = formData.get("image");
    console.log(image);

    axios
      .post("https://exceed-tournaments.herokuapp.com/create_user", data)
      .then(() => {
        setLogin("");
        setPass("");
        setRole("User");
        setFullname("");
        setErr("");
        setOffice("Греческая");
      })
      .then(() => {
        if (image) {
          const formData = new FormData();
          formData.append(login, image);
          axios
            .post(
              "https://exceed-tournaments.herokuapp.com/userPicture",
              formData
            )
            .catch((err) => console.log(err));
          setImage("");
        }
      })
      .catch((err) => setErr(err.message));
  };

  const handleImage = (event) => {
    const formFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(formFile);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  return (
    <div className="register">
      <>
        {authInfo.admin === true ? (
          <>
            <p>{err && err}</p>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center",
              }}
              onSubmit={(e) => handleSubmit(e)}
            >
              <input
                name="image"
                type="file"
                accept="image/jpeg,image/png"
                onChange={(e) => handleImage(e)}
              />
              {image && (
                <img
                  style={{ height: "40px", borderRadius: "50%" }}
                  src={image}
                  alt=""
                />
              )}
              <input
                value={login}
                name="login"
                onChange={(e) => setLogin(e.target.value)}
                placeholder="Login"
              />
              <input
                value={pass}
                name="password"
                onChange={(e) => setPass(e.target.value)}
                placeholder="Password"
              />
              <span>6 сиволов минимум одна большая буква и цифра</span>
              <input
                value={fullname}
                name="fullname"
                onChange={(e) => setFullname(e.target.value)}
                placeholder="Fullname "
              />
              <select
                value={role}
                name="role"
                onChange={(e) => setRole(e.target.value)}
              >
                <option value={"User"}>User</option>
                <option value={"Juri"}>Juri</option>
              </select>
              <select
                name="office"
                value={office}
                onChange={(e) => setOffice(e.target.value)}
              >
                <option value="Греческая">Греческая</option>
                <option value="Александровская">Александровская</option>
                <option value="Чехова">Чехова</option>
              </select>
              <button className="btn" type="submit">
                Submit
              </button>
            </form>
          </>
        ) : null}
      </>
    </div>
  );
};

export default SignUp;
