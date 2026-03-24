// Copyright (c) 2023-2024 Infinium Developers
// Copyright (c) 2014-2018 The Louisdor Project
// Copyright (c) 2012-2013 The Cryptonote developers
// Distributed under the MIT/X11 software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#pragma once

#include "checkpoints.h"
#include "misc_log_ex.h"

#define ADD_CHECKPOINT(h, hash)  CHECK_AND_ASSERT(checkpoints.add_checkpoint(h,  hash), false)

namespace currency
{

  inline bool create_checkpoints(currency::checkpoints& checkpoints)
  {
#ifdef TESTNET

#else
  ADD_CHECKPOINT(0,  "029f9443ff4fd829b784c83beef82bf4d3f24c2242cdd51191666fe728c27188");
  ADD_CHECKPOINT(1,  "66227541b8498a1058f18a36125342ba0c7c100bf036b1496a9c3e81517f5ed2");
  ADD_CHECKPOINT(50,  "ac388c6b86aad204db887dd0f29e3bcab20efbf9b988ba27cfd22094d00efc52");
  ADD_CHECKPOINT(100,  "a3783a4381b1137b4eafbb6951921856cb80e2e49625db1d9c4d2ba99bcd0d3f");
  ADD_CHECKPOINT(150,  "07391e0398f62959be2ac2c3494adee9a0806c8570fb58be7dc56d5763a40bd5");
  ADD_CHECKPOINT(200,  "f6f989ba35d0669828ba99b752405d0ba06603c1e765920ab76d9a685aacd254");
  ADD_CHECKPOINT(1000,  "4ac24887ca230e6e3fac9ad2dd44ab884df0de9d477f94c4a4cc5ab7bdfb1f77");
  ADD_CHECKPOINT(5000,  "8100a70596055f9f9717c1f99971b264f0d333e8e0a4af6704cbd7929a57b799");
  ADD_CHECKPOINT(25000,  "16c08e60a1ab0a5f46a8b781f67f7db52483f5df90ffe7db0b9dac730313bfdd");
  ADD_CHECKPOINT(125000,  "3a677716286abf6cae4f632c001456cd1826be9adf530363521bfbeeaac2bb52");
  ADD_CHECKPOINT(400000,  "b306d8b0fd202b550654b9d35cb92e095768afb0878942746cebbface5bc9c3a");
  ADD_CHECKPOINT(500000,  "48af8bbb9c0c31a24a886e939af43d5d3c19f4ddf6e6a4c7dd769474f923d71c"); 
  ADD_CHECKPOINT(600000,  "5b56d92749579121df88630bd7f9e98e75bc01f58e3798003b173f0cbd70d27f");
  ADD_CHECKPOINT(700000,  "417b7fc316f9147067194c4e99ef44398afa6f3ca6c8fd76ad5b035cc3400d00"); 
  ADD_CHECKPOINT(800000,  "0db6d4cdb599600b8c5fcaa7476d2a048fb973be4499bf4c8eed9891f479ece9");
  ADD_CHECKPOINT(900000,  "29d565768c3548278c5fd4fd829886970f66c48c4275108a78e02f1ca9cdca80"); 
  ADD_CHECKPOINT(1000000,  "96156a821c9c6ade1672bf9cdcb66ded62816c2be7fc8b4bae57113553bad936");   

#endif

    return true;
  }

} // namespace currency 
