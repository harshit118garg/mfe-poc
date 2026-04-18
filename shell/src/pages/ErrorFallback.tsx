import { Link } from "react-router-dom";
import { Button } from "../shared";

function ErrorFallbackPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f9fa",
        padding: "20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "500px",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            backgroundColor: "#fee2e2",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
          }}
        >
          <span style={{ fontSize: "40px", color: "#dc3545" }}>!</span>
        </div>
        <h1
          style={{
            fontSize: "24px",
            color: "#212529",
            marginBottom: "12px",
          }}
        >
          Something went wrong
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "#6c757d",
            marginBottom: "24px",
          }}
        >
          We encountered an unexpected error. Please return to the home page.
        </p>
        <Link to={"/"}>
          <Button label="back to home" onClick={() => {}} />
        </Link>
      </div>
    </div>
  );
}

export default ErrorFallbackPage;
