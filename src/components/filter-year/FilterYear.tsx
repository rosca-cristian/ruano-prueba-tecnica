import React, { CSSProperties } from "react";
import { useRecoilState } from "recoil";
import { selectedYearState } from "../../contexts/recoil";
import { useScreenSize } from '../../utils/media-query';

export default function FilterYear() {

  const { isXSmall } = useScreenSize();
  const inputStyles: CSSProperties = {
    marginTop: isXSmall ? '150px' : '50px',
    marginLeft: '50px',
    width: '400px',
    height: '30px',
    fontSize: '20px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  };

  const [selectedYear, setSelectedYear] = useRecoilState(selectedYearState);
  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedYear(parseInt(e.target.value));
  };

  return (
    <React.Fragment>
      <div style={inputStyles}>
        <label htmlFor="year">Seleccione un año </label>
        <input style={{ marginLeft: '5px', }} id="year"
          type="number"
          value={selectedYear}
          onChange={handleYearChange}
          min={2000}
          max={2025}
          step={1} />
      </div>
    </React.Fragment>
  );
}
