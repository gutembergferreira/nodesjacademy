document.getElementById('paragraphForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const paragraphCount = document.getElementById('paragraphCount').value;
  
    if (paragraphCount > 0) {
      const response = await fetch(`/generate?count=${paragraphCount}`);
      const result = await response.text();
      document.getElementById('result').innerHTML = result;
    }
  });