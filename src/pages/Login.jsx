import React from "react";
import { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";

const clientId =
  "263115005580-qc352fj605l9tv6lu9bo1c8ac85i8qfd.apps.googleusercontent.com";

function Login() {
  const navigate = useNavigate();

  const onSuccessLogin = (res) => {
    console.log(res.profileObj);
    localStorage.setItem("user", JSON.stringify(res.profileObj));
    navigate("/");
  };

  const onFailLogin = (res) => {
    console.log(res);
  };

  useEffect(() => {
    const isAuth = JSON.parse(localStorage.getItem("user"));
    if (isAuth?.googleId) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
          <div>
            <img
              class="mx-auto h-28 w-auto"
              src="/maskable_icon.png"
              alt="Workflow"
            />
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Login to explore the Bambu Meta
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600"></p>
          </div>
          <form
            class="mt-8 space-y-6 flex justify-center items-center"
            action="#"
            method="POST"
          >
            <div className="google-login-btn">
              <GoogleLogin
                clientId={clientId}
                buttonText="Login google"
                onSuccess={onSuccessLogin}
                onFailure={onFailLogin}
                cookiePolicy={"single_host_origin"}
                // isSignedIn={true}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
