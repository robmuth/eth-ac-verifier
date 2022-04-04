# PoC: Anonymous Credentials Verification Smart Contract
This proof-of-concept implementation provides a Solidity smart contract for on-chain anonymous credentails verification.
To this end, we ported parts of [Hyperledger Ursa](https://github.com/hyperledger/ursa) to Python (see [tgalal/ursa_indy_port](https://github.com/tgalal/ursa_indy_port)) and Solidity.
For more details, see our paper (link: TBA).

## Truffle Suite Test Case
We provide a Truffle Suite project with a single smart contract implementation for the proof verification.
For simplicity, we directly include the [BigInteger](https://github.com/firoorg/solidity-BigNumber) library.
We recommend connecting to Ganache for the test cases (with respect to the transaction costs).
At the end, the test cases return the gas costs per test case

- Data used in tests are found under [data/tests](data/tests/) (source: [tgalal/ursa_indy_port](https://github.com/tgalal/ursa_indy_port/tree/master/data/tests))
- Test vectors are from [Ursa](https://github.com/hyperledger/ursa)

```
truffle test --network ganache
```

Expected output:

```
  Contract: BigNumber
    ✓ converts 0x0.....0d to 13
    ✓ returns a small number (13) (204ms)
    ✓ returns a small number (14) (84ms)
    ✓ returns a big number (81ms)
    ✓ returns 2^596 (73ms)

  Contract: Verify
    ✓ test_calc_teq (3004ms)
    ✓ test_calc_tne (11253ms)
    ✓ verify_equality (6666ms)
    ✓ verify_ne_predicate (22595ms)
    ✓ test_verify_attr_proof_without_revocation (14840ms)
    ✓ test_verify_predicate_proof_without_revocation (47742ms)
    ✓ test_verify_full_proof_without_revocation (43046ms)


  12 passing (3m)
```

## License
robmuth/eth-ac-verifier is licensed under the [Apache License 2.0](LICENSE).

### Contributions
- Hyperledger Ursa: [Apache 2.0](https://github.com/hyperledger/ursa/blob/main/LICENSE)
- firoorg/solidity-BigNumber: [MIT](https://github.com/firoorg/solidity-BigNumber/blob/master/LICENSE)
