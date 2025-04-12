// #1
function handleButtonClick(buttonId, message) {
  const button = document.getElementById(buttonId);
  if (!button) {
    console.warn(`Button with ID "${buttonId}" not found.`);
    return;
  }

  button.addEventListener('click', () => {
    console.log(message);
  });
}

// #2
function trackMousePosition() {
  document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    console.log(`Mouse X: ${x}, Mouse Y: ${y}`);
  });
}

// #3
function setupEventDelegation(selector) {
  const list = document.querySelector(selector);
  if (!list) {
    console.warn(`List with selector "${selector}" not found.`);
    return;
  }

  list.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      const itemText = event.target.textContent.trim();
      console.log(`Item clicked: ${itemText}`);
    }
  });
}

export { handleButtonClick, trackMousePosition, setupEventDelegation };
