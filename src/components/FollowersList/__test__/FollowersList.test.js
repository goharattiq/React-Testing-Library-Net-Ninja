import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";
import axiosMock from "axios";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("FollowersList", () => {
  //   beforeEach(() => {
  //     // console.log("RUNS BEFORE EACH TEST")

  //   });

  //   beforeAll(() => {
  //     console.log("RUNS ONCE BEFORE ALL TESTS");
  //     // jest.mock("axios");
  //   });

  // afterEach(() => {
  //     console.log("RUNS AFTER EACH TEST")
  // })

  // afterAll(() => {
  //     console.log("RUNS ONCE AFTER ALL TESTS")
  // })

  it("should fetch and render input element", async () => {
    axiosMock.get.mockResolvedValueOnce({
      data: {
        results: [
          {
            name: {
              first: "Laith",
              last: "Harb",
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/59.jpg",
            },
            login: {
              username: "ThePhonyGOAT",
            },
          },
        ],
      },
    });

    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId(`follower-item-0`);
    expect(followerDivElement).toBeInTheDocument();
  });
});
