export const Square = ({ children, updateBoard, isSelected, index }) => {

    const handleClick = () => {
        updateBoard(index);
    }

  return (
    <div onClick={handleClick} className={`square ${isSelected ? "is-selected" : ""}`}>
      {children}
    </div>
  );
};
