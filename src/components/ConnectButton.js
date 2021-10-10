// import { Button, Box, Text } from "@chakra-ui/react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
export default function ConnectButton() {
  const {activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);
  function handleConnectWallet() {
    console.log("clicked");
    activateBrowserWallet();
  }
  return account ? (
    // <Box>
    //   <Text color="white" fontSize="md">
    //     {etherBalance && etherBalance} ETH
    //   </Text>
    // </Box>
    <>
    <div> {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH
    </div>
    <div>{account &&
            `${account.slice(0, 6)}...${account.slice(
              account.length - 4,
              account.length
            )}`}</div>
    </>
  ) : (
    <button onClick={handleConnectWallet}>Connect to a wallet</button>
  );
}