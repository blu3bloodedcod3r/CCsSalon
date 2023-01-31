<StoreProvider>
<Nav />
<Routes>
  <Route 
    path="/" 
    element={<Home />} 
  />
  <Route 
    path="/login" 
    element={<Login />} 
  />
  <Route 
    path="/signup" 
    element={<Signup />} 
  />
  <Route 
    path="/appointment" 
    element={<Book />} 
  />
  <Route 
    path="/services" 
    element={<Services />} 
  />
  <Route
    path="/user" 
    element={<User />} 
  />
  {/* <Route 
    path="/modifyServices" 
    element={<modifyServices />} 
  /> */}
  <Route 
    path="/home" 
    element={<Home />} 
  />
  <Route 
    path="/admin" 
    element={<Admin />} 
  />
  <Route
    path="*" 
    element={<NoMatch />} 
  />
</Routes>
<div>
{/* inserted appoinment-picker stuff 93-99 */}
<h1>{ title }</h1>
<h2>Embed into a React component</h2>
<div>
    <label>Time</label>
    <AppoPicker></AppoPicker>
</div>
</div>,
</StoreProvider>