import Button from "./Button";

const Table = ({ data, ths }) => {
  return (
    <table className='border-collapse w-full shadow-xl'>
      <thead>
        <tr>
          {ths.map((th, index) => (
            <th
              className='bg-green-500 py-3 text-white text-center'
              key={index}
            >
              {th}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((ele) => (
          <tr className='hover: bg-gray-100' key={ele.id}>
            {ths.map((th, jindex) => {
              return (
                <td className='border border-gray-400 p-2' key={jindex}>
                  {ele[th]}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
