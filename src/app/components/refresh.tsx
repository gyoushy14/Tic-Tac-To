import React from 'react';
function RefreshButton() {
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <div>
      <button onClick={handleRefresh} className="bg-teal-900 rounded text-center p-2 w-28 mt-5">Try Again</button>
    </div>
  );
}
export default RefreshButton;