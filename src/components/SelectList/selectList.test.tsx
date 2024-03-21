import { render, screen, fireEvent } from "@testing-library/react-native";

import { SelectList } from "@components/SelectList";

describe("Component: SelectList", () => {
  it("Should be return city details selected", () => {
    const data = [
      { id: "1", name: "Campinas", latitude: 1, longitude: 1 },
      { id: "2", name: "São Paulo", latitude: 2, longitude: 2 },
    ];

    const onPress = jest.fn();

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);

    const selectedCity = screen.getByText("Campinas");

    fireEvent.press(selectedCity);

    expect(onPress).toBeCalledWith(data[0]);
  });

  it("not should be show options when data props is empty.", () => {
    render(<SelectList data={[]} onChange={() => {}} onPress={() => {}} />);

    const options = screen.queryByTestId("options");
    expect(options.children).toHaveLength(0);
  });
});
