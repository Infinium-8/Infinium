// Copyright (c) 2023-2024 Infinium Developers
// Copyright (c) 2014-2018 The Louisdor Project
// Distributed under the MIT/X11 software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#pragma once
#include <string>
#include "epee/include/misc_log_ex.h"

struct notification_helper
{
    static void show(const std::string& title, const std::string& message);
};

#if !defined(__APPLE__)
void notification_helper::show(const std::string& title, const std::string& message)
{
    // Implementación para otras plataformas
    LOG_PRINT_RED("System notifications are not supported for this platform!", LOG_LEVEL_0);
}
#endif
