import { forwardRef, useMemo, useState } from "react";
import { Input } from "./ui/input";

import citiesList from "@/lib/cities-list";

interface LocationInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onLocationSelected: (location: string) => void;
}
export default forwardRef<HTMLInputElement, LocationInputProps>(
  function LocationInput({ onLocationSelected, ...props }, ref) {
    const [locationSearchInput, setLocationSearchInput] = useState("");
    const [hasFocus, setHasFocus] = useState(false);
    const cities = useMemo(() => {
      console.log(citiesList);
      if (!locationSearchInput.trim()) return [];
      const searchWords = locationSearchInput.split(" ");
      return citiesList
        .map((city) => `${city.name}, ${city.subcountry}`)
        .filter(
          (city) =>
            city.toLowerCase().startsWith(searchWords[0].toLowerCase()) &&
            searchWords.every((word) =>
              city.toLowerCase().includes(word.toLowerCase())
            )
        )
        .slice(0, 5);
    }, [locationSearchInput]);
    return (
      <div className="relative">
        <Input
          {...props}
          ref={ref}
          value={locationSearchInput}
          onChange={(e) => setLocationSearchInput(e.target.value)}
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
          placeholder="Search for a city"
          type="search"
        />
        {locationSearchInput.trim() && hasFocus && (
          <div className="absolute z-20 divide-y bg-background shadow-xl border-b rounded-b-lg">
            {!cities.length && <p className="p-3">No Results Found</p>}
            {cities.map((city) => (
              <button
                key={city}
                className="block w-full text-start p-2"
                onMouseDown={(e) => {
                  e.preventDefault();
                  onLocationSelected(city);
                  setLocationSearchInput("");
                }}
              >
                {city}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
);
