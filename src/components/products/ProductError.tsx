function ProductError() {
  return (
    <div className="absolute top-0 right-0 flex h-screen w-screen justify-center items-center">
      <div className="flex flex-col text-center">
        <h2 className="text-4xl font-bold">Error 500</h2>
        <p>Something went wrong while fetching products</p>
      </div>
    </div>
  );
}

export default ProductError;
