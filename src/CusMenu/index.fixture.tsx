import CusMenu from ".";
import TestPng from "../assets/test.png";

export default function () {
    return (
        <div
            style={{
                padding: "1rem",
                backgroundColor: "#ffffff1f",
            }}
        >
            <CusMenu
                options={[
                    {
                        icon: (
                            <img
                                src={TestPng}
                                alt=""
                                style={{ width: "100%" }}
                            />
                        ),
                        label: "one",
                        onClick: () => {
                            alert("one");
                        },
                    },
                    {
                        label: "two",
                        onClick: () => {
                            alert("two");
                        },
                    },
                ]}
            />
        </div>
    );
}
