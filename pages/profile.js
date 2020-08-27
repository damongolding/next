const axios = require("axios");

function Profile({ data }) {
	const { error, destiny } = data;
	
	const items = error ? null : destiny.map( thing => {
		return(
			<>
				<code>{JSON.stringify(thing, null, 1)}</code>
				<br/>
				<br/>
				-------
				<br/>
				<br/>
			</>
		)
	})

  return (
    <div>
      {error ? (
        <div>{error}</div>
      ) : (
        <div>
					<pre>
          { items }
          </pre>
        </div>
      )}
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  const destinyApi = axios.create({
    baseURL: "https://www.bungie.net/Platform/",
    timeout: 8000,
    headers: { "X-API-Key": "9c2fa45363f943bca1ab8b94c6d3fa59" },
  });

  try {
    const bNetUser = await destinyApi.get(`/User/GetBungieNetUserById/9209148`);
		const membershipByID = await destinyApi.get(`/User/GetMembershipsById/9209148/1/`);
		// const profile = await destinyApi.get(`/Destiny2/1/Profile/${membershipByID.data.Response.primaryMembershipId}/`);
		const bungieAccount = await destinyApi.get(`/User/GetBungieAccount/9209148/1/`);

    return {
      props: {
        data: { error: false, destiny : [ {bNetUser: bNetUser.data}, { membershipByID:membershipByID.data}, {profile: null}, {bungieAccount: bungieAccount.data}] },
      },
    };
  } catch (error) {
		console.log(error);
    return {
      props: {
        data: { error: error.toString() },
      },
    };
  }
}

export default Profile;
