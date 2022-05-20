import CoopInput from "shared/components/form/input/input.component";

const TransactionReportResult = () => {
  return (
    <div className="d-flex bg-white dash-outlet py-5 flex-column">
      <h5 className="px-5">Results</h5>
      <div className="bg-main px-5 py-1">
        <form>
            <CoopInput />
        </form>
      </div>
    </div>
  );
};

export default TransactionReportResult;
