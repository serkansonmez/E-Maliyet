﻿using System;
using Microsoft.Extensions.DependencyInjection;
using Serenity;

namespace E_Maliyet.AppServices
{
    public class DependencyResolver : IDependencyResolver
    {
        private IServiceProvider provider;

        public DependencyResolver(IServiceProvider provider)
        {
            this.provider = provider;
        }

        public TService Resolve<TService>() where TService : class
        {
            return provider.GetRequiredService<TService>();
        }

        public TService TryResolve<TService>() where TService : class
        {
            return provider.GetService<TService>();
        }
    }
}