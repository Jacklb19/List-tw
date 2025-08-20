export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-100">
      <div className="max-w-sm w-full bg-white p-6 rounded-2xl shadow-lg">
        <header className="flex justify-between text-sm text-gray-500 mb-4">
          <span>Tue Feb 18 2025</span>
          <span>9:31:25 p.m.</span>
        </header>

        <h2 className="text-lg font-bold text-blue-900 mb-3">List Tailwind</h2>

        <ul className="flex justify-between text-xs text-slate-700 mb-4">
          <li className="text-center">s<br />24</li>
          <li className="text-center">m<br />25</li>
          <li className="text-center">t<br />26</li>
          <li className="text-center">w<br />27</li>
          <li className="text-center">t<br />28</li>
          <li className="text-center">f<br />29</li>
          <li className="text-center">s<br />30</li>
        </ul>

        <ul className="space-y-3">
          <li className="flex items-center justify-between">
            <span className="flex items-center gap-2 bg-indigo-50 rounded-lg px-3 py-2 flex-1 mr-2">
              <span className="h-5 w-5 flex items-center justify-center rounded-full bg-green-600 text-white text-xs">✔</span>
              <s className="text-slate-700">take out the trash</s>
            </span>
            <time className="bg-indigo-50 rounded-lg px-3 py-3 text-xs text-blue-800">9:00 AM</time>
          </li>

          <li className="flex items-center justify-between">
            <span className="flex items-center gap-2 bg-indigo-50 rounded-lg px-3 py-2 flex-1 mr-2">
              <span className="h-5 w-5 flex items-center justify-center rounded-full bg-green-600 text-white text-xs">✔</span>
              <s className="text-slate-700">do homework</s>
            </span>
            <time className="bg-indigo-50 rounded-lg px-3 py-3 text-xs text-blue-800">12:00 PM</time>
          </li>

          <li className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
            <span className="h-6 w-6 flex items-center justify-center border-2 bg-white rounded-full"></span>
            <span className="flex-1 text-gray-700 mx-3">go to grocery store</span>
            <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-md text-xs">1:00 PM</span>
          </li>

          <li className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
            <span className="h-6 w-6 flex items-center justify-center border-2 border-gray-400 bg-white rounded-full"></span>
            <span className="flex-1 text-gray-700 mx-3">run 5 kilometers</span>
            <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-md text-xs">4:20 PM</span>
          </li>

          <li className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
            <span className="h-6 w-6 flex items-center justify-center border-2 border-gray-400 bg-white rounded-full"></span>
            <span className="flex-1 text-gray-700 mx-3">load the dishwasher</span>
            <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-md text-xs">9:00 PM</span>
          </li>

          <li className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
            <span className="h-6 w-6 flex items-center justify-center border-2 border-gray-400 bg-white rounded-full"></span>
            <span className="flex-1 text-gray-700 mx-3">Take out the trash</span>
            <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-md text-xs">9:00 AM</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
