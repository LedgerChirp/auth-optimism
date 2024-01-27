import "./App.css";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
function OptimismAuth({ buttonText, onConnect, onLogout }) {
	const [gasPrice, setGasPrice] = useState("0");
	const [provider, setProvider] = useState();
	const [account, setAccount] = useState("");
	const [balance, setBalance] = useState("");
	const [connected, setConnected] = useState(false);
	const [blockNumber, setBlockNumber] = useState("0");

	const ConnectEth = () => {
		if (typeof window.ethereum !== "undefined") {
			const provider = new ethers.providers.Web3Provider(window.ethereum);

			// Set initial authentication details
			const setInitialAuthDetails = async () => {
				try {
					const accounts = await window.ethereum.request({
						method: "eth_accounts",
					});

					if (accounts.length > 0) {
						setAccount(accounts[0]);
						const balance = await provider.getBalance(accounts[0]);
						setBalance(ethers.utils.formatEther(balance));
						setConnected(true);
					}
				} catch (error) {
					console.error("Error setting initial authentication details:", error);
				}
			};

			setInitialAuthDetails();
			setProvider(provider);
		}
	};
	useEffect(() => {
		if (provider) {
			const setBlockchainData = async () => {
				setBlockNumber(await provider.getBlockNumber());
				const gasPrice = await provider.getGasPrice();
				setGasPrice(Math.trunc(ethers.utils.formatUnits(gasPrice, "gwei")));
			};

			setBlockchainData();

			// Listen for account changes
			window.ethereum.on("accountsChanged", (accounts) => {
				if (accounts.length > 0) {
					accountHandler(accounts[0]);
					setConnected(true);
				} else {
					setConnected(false);
				}
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const accountHandler = async (account) => {
		try {
			setAccount(account);
			const balance = await provider.getBalance(account);
			setBalance(ethers.utils.formatEther(balance));
		} catch (error) {
			console.log(error);
		}
	};

	const logoutHandler = async () => {
		try {
			await window.ethereum.request({ method: "eth_requestAccounts" });
			setConnected(false);
			setAccount("");
			setBalance("");
			onLogout(); // custom callback
		} catch (error) {
			console.error("Error logging out:", error);
		}
	};

	const connectHandler = async () => {
		try {
			ConnectEth();
			await provider.send("eth_requestAccounts", []);
			const accountList = await provider.listAccounts();
			accountHandler(accountList[0]);
			setConnected(true);
			onConnect(); // custom callback
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			{connected ? (
				<div>
					<label>{`${Number.parseFloat(balance).toPrecision(4)} ETH`}</label>
					<button className="account-button" onClick={connectHandler}>
						{account.substring(0, 6)}...
						{account.substring(account.length - 4)}
					</button>
					<button className="account-button" onClick={logoutHandler}>
						Logout
					</button>
				</div>
			) : (
				<button className="connect-button" onClick={connectHandler}>
					{buttonText || "Auth With Optimism"}
				</button>
			)}
		</>
	);
}

export default OptimismAuth;
