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

#endif

    return true;
  }

} // namespace currency 
