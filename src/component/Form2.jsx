import React, { useState, useRef } from "react";

const Form2 = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const nameRef = useRef(null);
    const passwordRef = useRef(null);
    const [nameErrors, setNameErrors] = useState(null);
    const [passwordErrors, setPasswordErrors] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        let nameError = null;
        let passwordError = null;

        if (name.length < 3) {
            nameError = "Name must be at least 3 characters";
        }

        if (password.length < 6) {
            passwordError = "Password must be at least 6 characters";
        }

        setNameErrors(nameError);
        setPasswordErrors(passwordError);

        if (!nameError && !passwordError) {
            console.log(name, password);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 justify-center items-center h-screen"
        >
            <label htmlFor="name">
                Name{nameErrors && <span className="text-red-500">{nameErrors}</span>}
            </label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                ref={nameRef}
                required
            />
            <br />
            <label htmlFor="password">
                Password{" "}
                {passwordErrors && (
                    <span className="text-red-500">{passwordErrors}</span>
                )}
            </label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ref={passwordRef}
                required
            />
            <br />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Submit
            </button>
            {!nameErrors && !passwordErrors && (
                <p className="text-green-500">Form is valid</p>
            )}
        </form>
    );
};

export default Form2;
