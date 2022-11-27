
export class Product {
  endpoint = "https://638140a09440b61b0d14c4c3.mockapi.io/api/Vehiculos"

  async obtain() {
    try {
      const response = await fetch(this.endpoint);
      const result = await response.json();

      if (response.status !== 200) throw result;
      
      return result;
    } catch (error) {
      throw error;
    }
  }
}