using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;

namespace Visitkort.Models
{
    public class VisitkortDataAccessLayer
    {
        string connectionString = "Server=tcp:explorenow.database.windows.net,1433;Initial Catalog=ExploreNow;Persist Security Info=False;User ID=sysadmin;Password=kennas123!;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";

        //Visar alla visitkort
        public IEnumerable<VisitkortClass> GetAllVisitkort()
        {
            try
            {
                List<VisitkortClass> lstvisitkort = new List<VisitkortClass>();

                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spGetAllVisitkort", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        VisitkortClass visitkort = new VisitkortClass();
                        visitkort.Id = Convert.ToInt32(rdr["Id"]);
                        visitkort.Name = rdr["name"].ToString();
                        visitkort.SurName = rdr["surName"].ToString();
                        visitkort.Telephone = rdr["telephone"].ToString();
                        visitkort.Email = rdr["email"].ToString();
                        lstvisitkort.Add(visitkort);
                    }
                    con.Close();
                }
                return lstvisitkort;
            }
            catch
            {
                throw;
            }
        }
        //Lägga till nytt visitkort
        public int AddVisitkort(VisitkortClass visitkort)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spAddVisitkort", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@name", visitkort.Name);
                    cmd.Parameters.AddWithValue("@surName", visitkort.SurName);
                    cmd.Parameters.AddWithValue("@telephone", visitkort.Telephone);
                    cmd.Parameters.AddWithValue("@email", visitkort.Email);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //Uppdatera befintligt visitkort
        public int UpdateVisitkort(VisitkortClass visitkort)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spUpdateVisitkort", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Id", visitkort.Id);
                    cmd.Parameters.AddWithValue("@name", visitkort.Name);
                    cmd.Parameters.AddWithValue("@surName", visitkort.SurName);
                    cmd.Parameters.AddWithValue("@telephone", visitkort.Telephone);
                    cmd.Parameters.AddWithValue("@email", visitkort.Email);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //Hämtar detaljer om specifikt visitkort
        public VisitkortClass GetVisitkortData(int id)
        {
            try
            {
                VisitkortClass visitkort = new VisitkortClass();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    string sqlQuery = "select * from tblVisitkort where Id =" + id;
                    SqlCommand cmd = new SqlCommand(sqlQuery, con);
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        visitkort.Id = Convert.ToInt32(rdr["Id"]);
                        visitkort.Name = rdr["name"].ToString();
                        visitkort.SurName = rdr["surName"].ToString();
                        visitkort.Telephone = rdr["telephone"].ToString();
                        visitkort.Email = rdr["email"].ToString();
                    }
                }
                return visitkort;
            }
            catch
            {
                throw;
            }
        }
        //Raderar specifikt visitkort
        public int DeleteVisitkort(int id)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spDeleteVisitkort", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Id", id);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }
}
